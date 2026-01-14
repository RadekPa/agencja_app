import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './objects/tmpKursyXMLSelect.schema';
import { tmpKursyXMLUpdateInputObjectSchema as tmpKursyXMLUpdateInputObjectSchema } from './objects/tmpKursyXMLUpdateInput.schema';
import { tmpKursyXMLUncheckedUpdateInputObjectSchema as tmpKursyXMLUncheckedUpdateInputObjectSchema } from './objects/tmpKursyXMLUncheckedUpdateInput.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';

export const tmpKursyXMLUpdateOneSchema: z.ZodType<Prisma.tmpKursyXMLUpdateArgs> = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  data: z.union([tmpKursyXMLUpdateInputObjectSchema, tmpKursyXMLUncheckedUpdateInputObjectSchema]), where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLUpdateArgs>;

export const tmpKursyXMLUpdateOneZodSchema = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  data: z.union([tmpKursyXMLUpdateInputObjectSchema, tmpKursyXMLUncheckedUpdateInputObjectSchema]), where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict();