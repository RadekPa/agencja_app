import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsOrderByWithRelationInputObjectSchema as tblAgrEventsOrderByWithRelationInputObjectSchema } from './objects/tblAgrEventsOrderByWithRelationInput.schema';
import { tblAgrEventsWhereInputObjectSchema as tblAgrEventsWhereInputObjectSchema } from './objects/tblAgrEventsWhereInput.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';
import { TblAgrEventsScalarFieldEnumSchema } from './enums/TblAgrEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblAgrEventsFindManySelectSchema: z.ZodType<Prisma.tblAgrEventsSelect> = z.object({
    AgrEventID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AgrEventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    dictAgrEvents: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsSelect>;

export const tblAgrEventsFindManySelectZodSchema = z.object({
    AgrEventID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AgrEventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    dictAgrEvents: z.boolean().optional()
  }).strict();

export const tblAgrEventsFindManySchema: z.ZodType<Prisma.tblAgrEventsFindManyArgs> = z.object({ select: tblAgrEventsFindManySelectSchema.optional(), include: z.lazy(() => tblAgrEventsIncludeObjectSchema.optional()), orderBy: z.union([tblAgrEventsOrderByWithRelationInputObjectSchema, tblAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrEventsWhereInputObjectSchema.optional(), cursor: tblAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgrEventsScalarFieldEnumSchema, TblAgrEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsFindManyArgs>;

export const tblAgrEventsFindManyZodSchema = z.object({ select: tblAgrEventsFindManySelectSchema.optional(), include: z.lazy(() => tblAgrEventsIncludeObjectSchema.optional()), orderBy: z.union([tblAgrEventsOrderByWithRelationInputObjectSchema, tblAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrEventsWhereInputObjectSchema.optional(), cursor: tblAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgrEventsScalarFieldEnumSchema, TblAgrEventsScalarFieldEnumSchema.array()]).optional() }).strict();