import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './objects/tmpKursyXMLSelect.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';
import { tmpKursyXMLCreateInputObjectSchema as tmpKursyXMLCreateInputObjectSchema } from './objects/tmpKursyXMLCreateInput.schema';
import { tmpKursyXMLUncheckedCreateInputObjectSchema as tmpKursyXMLUncheckedCreateInputObjectSchema } from './objects/tmpKursyXMLUncheckedCreateInput.schema';
import { tmpKursyXMLUpdateInputObjectSchema as tmpKursyXMLUpdateInputObjectSchema } from './objects/tmpKursyXMLUpdateInput.schema';
import { tmpKursyXMLUncheckedUpdateInputObjectSchema as tmpKursyXMLUncheckedUpdateInputObjectSchema } from './objects/tmpKursyXMLUncheckedUpdateInput.schema';

export const tmpKursyXMLUpsertOneSchema: z.ZodType<Prisma.tmpKursyXMLUpsertArgs> = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema, create: z.union([ tmpKursyXMLCreateInputObjectSchema, tmpKursyXMLUncheckedCreateInputObjectSchema ]), update: z.union([ tmpKursyXMLUpdateInputObjectSchema, tmpKursyXMLUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLUpsertArgs>;

export const tmpKursyXMLUpsertOneZodSchema = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema, create: z.union([ tmpKursyXMLCreateInputObjectSchema, tmpKursyXMLUncheckedCreateInputObjectSchema ]), update: z.union([ tmpKursyXMLUpdateInputObjectSchema, tmpKursyXMLUncheckedUpdateInputObjectSchema ]) }).strict();