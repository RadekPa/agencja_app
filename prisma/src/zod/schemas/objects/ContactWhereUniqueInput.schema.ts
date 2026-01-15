import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ContactWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContactWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactWhereUniqueInput>;
export const ContactWhereUniqueInputObjectZodSchema = makeSchema();
