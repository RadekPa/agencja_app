import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './objects/tmpKursyXMLSelect.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';

export const tmpKursyXMLFindUniqueOrThrowSchema: z.ZodType<Prisma.tmpKursyXMLFindUniqueOrThrowArgs> = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLFindUniqueOrThrowArgs>;

export const tmpKursyXMLFindUniqueOrThrowZodSchema = z.object({ select: tmpKursyXMLSelectObjectSchema.optional(),  where: tmpKursyXMLWhereUniqueInputObjectSchema }).strict();