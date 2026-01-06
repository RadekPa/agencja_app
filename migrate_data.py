#!/usr/bin/env python3
"""
Migracja danych z Postgresa do SQL Server
Konwertuje CSV dane z tabel aplikacji na insert-skrypt dla SQL Server
"""
import csv
import json
from datetime import datetime
from pathlib import Path

# Mapowanie nazw tabel i ich kolumn
TABLES = {
    'User': ['id', 'name', 'email', 'passwordHash', 'role', 'permissions', 'locale', 'createdAt', 'updatedAt'],
    'RolePermissions': ['id', 'module', 'userAccess', 'advancedAccess', 'adminAccess', 'createdAt', 'updatedAt'],
    'Client': ['id', 'name', 'email', 'phone', 'address', 'city', 'postalCode', 'country', 'nip', 'regon', 'legalForm', 'bankAccount', 'notes', 'createdAt', 'updatedAt'],
    'Author': ['id', 'firstName', 'middleName', 'lastName', 'description', 'workEmail', 'personalEmail', 'photos', 'clientId', 'createdAt', 'updatedAt'],
    'Document': ['id', 'title', 'description', 'status', 'createdAt', 'updatedAt', 'clientId'],
    'Invoice': ['id', 'clientId', 'title', 'issueDate', 'paymentDate', 'net', 'vatPerc', 'vat', 'gross', 'status', 'createdAt', 'updatedAt'],
    'BalanceAdjustment': ['id', 'date', 'amount', 'description', 'createdAt', 'updatedAt'],
}

def escape_sql_string(value):
    """Escape SQL Server string"""
    if value is None or value == '':
        return 'NULL'
    # Escape single quotes
    escaped = str(value).replace("'", "''")
    return f"'{escaped}'"

def format_sql_datetime(value):
    """Format datetime for SQL Server"""
    if not value or value == '':
        return 'NULL'
    # Parse PostgreSQL datetime and format for SQL Server
    try:
        # Handle timezone aware datetimes
        if '+' in str(value) or 'Z' in str(value):
            dt = datetime.fromisoformat(str(value).replace('Z', '+00:00'))
        else:
            dt = datetime.fromisoformat(str(value))
        return f"'{dt.isoformat()}'"
    except:
        return escape_sql_string(value)

def format_value(col_name, value):
    """Format value based on column type"""
    if value == '' or value is None:
        return 'NULL'
    
    col_lower = col_name.lower()
    
    # Boolean fields (userAccess, advancedAccess, adminAccess)
    if col_lower in ['useraccess', 'advancedaccess', 'adminaccess']:
        return '1' if str(value).lower() in ['true', '1', 'yes'] else '0'
    
    # Integer fields
    if col_lower in ['id', 'clientid', 'vatperc']:
        try:
            return str(int(float(value)))
        except:
            return 'NULL'
    
    # Float fields
    if col_lower in ['net', 'vat', 'gross', 'amount']:
        try:
            return str(float(value))
        except:
            return 'NULL'
    
    # DateTime fields
    if col_lower in ['createdat', 'updatedat', 'issuedate', 'paymentdate', 'date']:
        return format_sql_datetime(value)
    
    # JSON fields (photos, permissions) - store as JSON string
    if col_lower in ['photos', 'permissions']:
        if value and value != '{}':
            try:
                # Validate JSON
                json.loads(value)
                return escape_sql_string(value)
            except:
                return escape_sql_string(value)
        return 'NULL'
    
    # Default: string
    return escape_sql_string(value)

def generate_insert_script():
    """Generate SQL Server insert script from CSV files"""
    script = []
    script.append("-- Migration script: PostgreSQL -> SQL Server")
    script.append(f"-- Generated: {datetime.now().isoformat()}")
    script.append("-- Turn off identity inserts if needed")
    script.append("")
    
    for table_name, columns in TABLES.items():
        csv_file = f"{table_name}_data.csv"
        csv_path = Path(csv_file)
        
        if not csv_path.exists() or csv_path.stat().st_size == 0:
            script.append(f"-- Table {table_name}: No data to migrate")
            continue
        
        script.append(f"-- Migrating {table_name}")
        script.append(f"SET IDENTITY_INSERT [dbo].[{table_name}] ON;")
        script.append("")
        
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.reader(f, delimiter='|')
            for row in reader:
                if not row or not any(row):  # Skip empty rows
                    continue
                
                # Build values list
                values = []
                for i, col_name in enumerate(columns):
                    value = row[i] if i < len(row) else ''
                    values.append(format_value(col_name, value))
                
                # Build INSERT statement
                cols_str = ', '.join([f'[{col}]' for col in columns])
                vals_str = ', '.join(values)
                insert = f"INSERT INTO [dbo].[{table_name}] ({cols_str}) VALUES ({vals_str});"
                script.append(insert)
        
        script.append(f"SET IDENTITY_INSERT [dbo].[{table_name}] OFF;")
        script.append("")
    
    return '\n'.join(script)

if __name__ == '__main__':
    script = generate_insert_script()
    
    # Write to file
    output_file = 'migrate_data.sql'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(script)
    
    print(f"✓ Generated {output_file}")
    print(f"  Size: {Path(output_file).stat().st_size} bytes")
    print("\nPreview (first 50 lines):")
    with open(output_file, 'r') as f:
        lines = f.readlines()
        for line in lines[:50]:
            print(line.rstrip())
