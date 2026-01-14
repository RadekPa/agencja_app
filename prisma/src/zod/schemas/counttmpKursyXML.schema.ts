import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLOrderByWithRelationInputObjectSchema as tmpKursyXMLOrderByWithRelationInputObjectSchema } from './objects/tmpKursyXMLOrderByWithRelationInput.schema';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';
import { TmpKursyXMLCountAggregateInputObjectSchema as TmpKursyXMLCountAggregateInputObjectSchema } from './objects/TmpKursyXMLCountAggregateInput.schema';

export const tmpKursyXMLCountSchema: z.ZodType<Prisma.tmpKursyXMLCountArgs> = z.object({ orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TmpKursyXMLCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLCountArgs>;

export const tmpKursyXMLCountZodSchema = z.object({ orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TmpKursyXMLCountAggregateInputObjectSchema ]).optional() }).strict();