import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubOrderByWithRelationInputObjectSchema as tblCertPubOrderByWithRelationInputObjectSchema } from './objects/tblCertPubOrderByWithRelationInput.schema';
import { tblCertPubWhereInputObjectSchema as tblCertPubWhereInputObjectSchema } from './objects/tblCertPubWhereInput.schema';
import { tblCertPubWhereUniqueInputObjectSchema as tblCertPubWhereUniqueInputObjectSchema } from './objects/tblCertPubWhereUniqueInput.schema';
import { TblCertPubCountAggregateInputObjectSchema as TblCertPubCountAggregateInputObjectSchema } from './objects/TblCertPubCountAggregateInput.schema';

export const tblCertPubCountSchema: z.ZodType<Prisma.tblCertPubCountArgs> = z.object({ orderBy: z.union([tblCertPubOrderByWithRelationInputObjectSchema, tblCertPubOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCertPubWhereInputObjectSchema.optional(), cursor: tblCertPubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCertPubCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCertPubCountArgs>;

export const tblCertPubCountZodSchema = z.object({ orderBy: z.union([tblCertPubOrderByWithRelationInputObjectSchema, tblCertPubOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCertPubWhereInputObjectSchema.optional(), cursor: tblCertPubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCertPubCountAggregateInputObjectSchema ]).optional() }).strict();