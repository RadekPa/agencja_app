import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './objects/tblSeriesInclude.schema';
import { tblSeriesOrderByWithRelationInputObjectSchema as tblSeriesOrderByWithRelationInputObjectSchema } from './objects/tblSeriesOrderByWithRelationInput.schema';
import { tblSeriesWhereInputObjectSchema as tblSeriesWhereInputObjectSchema } from './objects/tblSeriesWhereInput.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './objects/tblSeriesWhereUniqueInput.schema';
import { TblSeriesScalarFieldEnumSchema } from './enums/TblSeriesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblSeriesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblSeriesSelect> = z.object({
    SeriesID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    SeriesFullName: z.boolean().optional(),
    SeriesShortName: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblSeriesSelect>;

export const tblSeriesFindFirstOrThrowSelectZodSchema = z.object({
    SeriesID: z.boolean().optional(),
    CustID: z.boolean().optional(),
    SeriesFullName: z.boolean().optional(),
    SeriesShortName: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict();

export const tblSeriesFindFirstOrThrowSchema: z.ZodType<Prisma.tblSeriesFindFirstOrThrowArgs> = z.object({ select: tblSeriesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblSeriesIncludeObjectSchema.optional()), orderBy: z.union([tblSeriesOrderByWithRelationInputObjectSchema, tblSeriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSeriesWhereInputObjectSchema.optional(), cursor: tblSeriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSeriesScalarFieldEnumSchema, TblSeriesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSeriesFindFirstOrThrowArgs>;

export const tblSeriesFindFirstOrThrowZodSchema = z.object({ select: tblSeriesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblSeriesIncludeObjectSchema.optional()), orderBy: z.union([tblSeriesOrderByWithRelationInputObjectSchema, tblSeriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSeriesWhereInputObjectSchema.optional(), cursor: tblSeriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSeriesScalarFieldEnumSchema, TblSeriesScalarFieldEnumSchema.array()]).optional() }).strict();