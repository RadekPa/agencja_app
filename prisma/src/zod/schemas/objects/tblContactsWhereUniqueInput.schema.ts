import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.number().int().optional()
}).strict();
export const tblContactsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblContactsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsWhereUniqueInput>;
export const tblContactsWhereUniqueInputObjectZodSchema = makeSchema();
