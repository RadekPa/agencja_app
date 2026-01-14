import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankOrderByWithRelationInputObjectSchema as tblCustBankOrderByWithRelationInputObjectSchema } from './objects/tblCustBankOrderByWithRelationInput.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './objects/tblCustBankWhereInput.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './objects/tblCustBankWhereUniqueInput.schema';
import { TblCustBankCountAggregateInputObjectSchema as TblCustBankCountAggregateInputObjectSchema } from './objects/TblCustBankCountAggregateInput.schema';

export const tblCustBankCountSchema: z.ZodType<Prisma.tblCustBankCountArgs> = z.object({ orderBy: z.union([tblCustBankOrderByWithRelationInputObjectSchema, tblCustBankOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustBankWhereInputObjectSchema.optional(), cursor: tblCustBankWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustBankCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustBankCountArgs>;

export const tblCustBankCountZodSchema = z.object({ orderBy: z.union([tblCustBankOrderByWithRelationInputObjectSchema, tblCustBankOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustBankWhereInputObjectSchema.optional(), cursor: tblCustBankWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustBankCountAggregateInputObjectSchema ]).optional() }).strict();