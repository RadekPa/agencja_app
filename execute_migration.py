#!/usr/bin/env python3
"""
Wgrywanie schematów i danych do Azure SQL Server
"""
import pyodbc
import sys

# Dane dostępu
server = 'graalcloud.database.windows.net'
database = 'AgentChmura'
username = 'rpacuk'
password = 'R@dek123'
port = 1433

# Connection string
conn_str = f'Driver={{ODBC Driver 18 for SQL Server}};Server=tcp:{server},{port};Database={database};Uid={username};Pwd={password};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

def execute_sql_file(conn, filepath, description):
    """Execute SQL script from file"""
    print(f"\n{'='*60}")
    print(f"Executing: {description}")
    print(f"File: {filepath}")
    print(f"{'='*60}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            sql = f.read()
        
        cursor = conn.cursor()
        
        # Split by GO statements (SQL Server batch separator)
        batches = sql.split('GO\n')
        
        for i, batch in enumerate(batches):
            batch = batch.strip()
            if not batch:
                continue
            
            try:
                cursor.execute(batch)
                conn.commit()
                if i % 50 == 0:
                    print(f"  ✓ Batch {i} executed")
            except pyodbc.ProgrammingError as e:
                # Some CREATE statements might fail if objects exist - continue
                if 'already exists' in str(e):
                    print(f"  ⓘ Object already exists (batch {i}): {str(e)[:80]}")
                else:
                    print(f"  ✗ Error in batch {i}: {e}")
                    conn.rollback()
                    return False
            except Exception as e:
                print(f"  ✗ Error in batch {i}: {e}")
                conn.rollback()
                return False
        
        cursor.close()
        print(f"✓ Successfully completed: {description}")
        return True
        
    except Exception as e:
        print(f"✗ Failed to execute {description}: {e}")
        return False

def main():
    try:
        print(f"Connecting to SQL Server...")
        print(f"Server: {server}")
        print(f"Database: {database}")
        
        conn = pyodbc.connect(conn_str)
        print(f"✓ Connected successfully!")
        
        # Step 1: Execute schema
        success = execute_sql_file(conn, 'app_schema.sql', 'Schema Creation')
        if not success:
            print("✗ Schema creation failed!")
            conn.close()
            return False
        
        # Step 2: Execute data migration
        success = execute_sql_file(conn, 'migrate_data.sql', 'Data Migration')
        if not success:
            print("✗ Data migration failed!")
            conn.close()
            return False
        
        # Verify counts
        print(f"\n{'='*60}")
        print("Verifying migrated data...")
        print(f"{'='*60}")
        
        cursor = conn.cursor()
        tables = ['User', 'RolePermissions', 'Client', 'Author', 'Document', 'Invoice', 'BalanceAdjustment']
        
        total_records = 0
        for table in tables:
            try:
                cursor.execute(f"SELECT COUNT(*) as cnt FROM [dbo].[{table}]")
                count = cursor.fetchone()[0]
                total_records += count
                print(f"  {table}: {count} records")
            except Exception as e:
                print(f"  {table}: Error - {e}")
        
        cursor.close()
        
        print(f"\n✓ Total records migrated: {total_records}")
        print(f"✓ Migration completed successfully!")
        
        conn.close()
        return True
        
    except pyodbc.Error as e:
        print(f"✗ Database connection error: {e}")
        return False
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)
