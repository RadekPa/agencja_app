import * as z from 'zod';

export const TblCustomersScalarFieldEnumSchema = z.enum(['CustID', 'CustAbb', 'Account', 'CountryID', 'Name', 'Address1', 'Address2', 'City', 'Zip', 'StateAbb', 'DefaultPhone', 'DefaultFax', 'DefaultEmail', 'DefaultWWW', 'ParentCustID', 'LangAbb', 'Remarks', 'DateMod', 'UserMod', 'TaxID', 'VATID', 'RepModeID', 'GraalID', 'Commission', 'DefAgrDoc', 'Jurisdiction', 'CommissionForeign', 'CommissionMaterials', 'Status'])

export type TblCustomersScalarFieldEnum = z.infer<typeof TblCustomersScalarFieldEnumSchema>;