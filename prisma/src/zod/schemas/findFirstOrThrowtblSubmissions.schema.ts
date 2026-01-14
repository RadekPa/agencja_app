import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './objects/tblSubmissionsInclude.schema';
import { tblSubmissionsOrderByWithRelationInputObjectSchema as tblSubmissionsOrderByWithRelationInputObjectSchema } from './objects/tblSubmissionsOrderByWithRelationInput.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './objects/tblSubmissionsWhereInput.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './objects/tblSubmissionsWhereUniqueInput.schema';
import { TblSubmissionsScalarFieldEnumSchema } from './enums/TblSubmissionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblSubmissionsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblSubmissionsSelect> = z.object({
    SubmID: z.boolean().optional(),
    CopyTypeID: z.boolean().optional(),
    SubmSentTypeID: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    Exclusive: z.boolean().optional(),
    SubmDate: z.boolean().optional(),
    SentDate: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    ReturnDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    TrackingNo: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Status: z.boolean().optional(),
    SubmNr: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    ContactID: z.boolean().optional(),
    tblSubmEvents: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictSubmSentType: z.boolean().optional(),
    dictCopyType: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsSelect>;

export const tblSubmissionsFindFirstOrThrowSelectZodSchema = z.object({
    SubmID: z.boolean().optional(),
    CopyTypeID: z.boolean().optional(),
    SubmSentTypeID: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    Exclusive: z.boolean().optional(),
    SubmDate: z.boolean().optional(),
    SentDate: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    ReturnDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    TrackingNo: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Status: z.boolean().optional(),
    SubmNr: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    ContactID: z.boolean().optional(),
    tblSubmEvents: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictSubmSentType: z.boolean().optional(),
    dictCopyType: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblSubmissionsFindFirstOrThrowSchema: z.ZodType<Prisma.tblSubmissionsFindFirstOrThrowArgs> = z.object({ select: tblSubmissionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblSubmissionsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmissionsOrderByWithRelationInputObjectSchema, tblSubmissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmissionsWhereInputObjectSchema.optional(), cursor: tblSubmissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmissionsScalarFieldEnumSchema, TblSubmissionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsFindFirstOrThrowArgs>;

export const tblSubmissionsFindFirstOrThrowZodSchema = z.object({ select: tblSubmissionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblSubmissionsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmissionsOrderByWithRelationInputObjectSchema, tblSubmissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmissionsWhereInputObjectSchema.optional(), cursor: tblSubmissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmissionsScalarFieldEnumSchema, TblSubmissionsScalarFieldEnumSchema.array()]).optional() }).strict();