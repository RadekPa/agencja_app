import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';

export const tmpKursyXMLDeleteManySchema: z.ZodType<Prisma.tmpKursyXMLDeleteManyArgs> = z.object({ where: tmpKursyXMLWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLDeleteManyArgs>;

export const tmpKursyXMLDeleteManyZodSchema = z.object({ where: tmpKursyXMLWhereInputObjectSchema.optional() }).strict();