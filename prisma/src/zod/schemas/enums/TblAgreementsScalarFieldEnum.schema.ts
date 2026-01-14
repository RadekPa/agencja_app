import * as z from 'zod';

export const TblAgreementsScalarFieldEnumSchema = z.enum(['AgrID', 'CustID', 'CountryID', 'LangAbbr', 'TitleID', 'CurrID', 'AgrDate', 'ValidYY', 'PubTermMM', 'MaxNoOfCopies', 'MinNoOfCopies', 'Commission', 'ClientReference', 'DateMod', 'UserMod', 'GraalAgentID', 'GraalShare', 'EstimatedCopyPrice', 'GraalRepresent', 'Remarks', 'AgrDoc', 'Status', 'CopiesToOwner', 'CopiesToGraal', 'LocalTitle', 'LocalISBN', 'LocalPubDate', 'ClientID', 'CommissionMaterials', 'AgentID', 'PropID'])

export type TblAgreementsScalarFieldEnum = z.infer<typeof TblAgreementsScalarFieldEnumSchema>;