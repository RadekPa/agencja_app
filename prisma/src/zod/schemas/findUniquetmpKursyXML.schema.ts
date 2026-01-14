import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './objects/tmpKursyXMLSelect.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';

export const tmpKursyXMLFindUniqueSchema: z.ZodType<Prisma.tmpKursyXMLFindUniqueArgs> = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLFindUniqueArgs>;

export const tmpKursyXMLFindUniqueZodSchema = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict();