import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Id: z.number().int().optional()
}).strict();
export const tmpKursyXMLWhereUniqueInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLWhereUniqueInput>;
export const tmpKursyXMLWhereUniqueInputObjectZodSchema = makeSchema();
