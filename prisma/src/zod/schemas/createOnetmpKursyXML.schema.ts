import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './objects/tmpKursyXMLSelect.schema';
import { tmpKursyXMLCreateInputObjectSchema as tmpKursyXMLCreateInputObjectSchema } from './objects/tmpKursyXMLCreateInput.schema';
import { tmpKursyXMLUncheckedCreateInputObjectSchema as tmpKursyXMLUncheckedCreateInputObjectSchema } from './objects/tmpKursyXMLUncheckedCreateInput.schema';

export const tmpKursyXMLCreateOneSchema: z.ZodType<Prisma.tmpKursyXMLCreateArgs> = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  data: z.union([tmpKursyXMLCreateInputObjectSchema, tmpKursyXMLUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLCreateArgs>;

export const tmpKursyXMLCreateOneZodSchema = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  data: z.union([tmpKursyXMLCreateInputObjectSchema, tmpKursyXMLUncheckedCreateInputObjectSchema]) }).strict();