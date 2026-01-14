import * as z from 'zod';

export const TblTitlesScalarFieldEnumSchema = z.enum(['TitleID', 'CustID', 'PropID', 'Proprietor', 'LangAbb', 'ClassCode', 'CoverFormatID', 'Title', 'ISBN1', 'ISBN2', 'ISBN3', 'ISBN4', 'SeriesIID', 'Edition', 'DateOfReceipt', 'NoOfPages', 'CopyrightYear', 'CopyrightOwner', 'CopyrightOwnerDesc', 'KeyWords', 'TitleVolume', 'NoOfTitleVolumes', 'Hit', 'Junk', 'CD', 'Collection', 'Remarks', 'UserMod', 'DateMod', 'ISBN', 'PubID', 'ProprietorDesc', 'ISBN0'])

export type TblTitlesScalarFieldEnum = z.infer<typeof TblTitlesScalarFieldEnumSchema>;