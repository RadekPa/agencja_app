import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './objects/tblAgreementsOrderByWithRelationInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './objects/tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './objects/tblAgreementsWhereUniqueInput.schema';
import { TblAgreementsCountAggregateInputObjectSchema as TblAgreementsCountAggregateInputObjectSchema } from './objects/TblAgreementsCountAggregateInput.schema';

export const tblAgreementsCountSchema: z.ZodType<Prisma.tblAgreementsCountArgs> = z.object({ orderBy: z.union([tblAgreementsOrderByWithRelationInputObjectSchema, tblAgreementsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgreementsWhereInputObjectSchema.optional(), cursor: tblAgreementsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgreementsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgreementsCountArgs>;

export const tblAgreementsCountZodSchema = z.object({ orderBy: z.union([tblAgreementsOrderByWithRelationInputObjectSchema, tblAgreementsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgreementsWhereInputObjectSchema.optional(), cursor: tblAgreementsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgreementsCountAggregateInputObjectSchema ]).optional() }).strict();