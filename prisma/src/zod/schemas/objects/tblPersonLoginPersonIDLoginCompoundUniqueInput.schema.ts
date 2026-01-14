import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.number().int(),
  Login: z.string()
}).strict();
export const tblPersonLoginPersonIDLoginCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblPersonLoginPersonIDLoginCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginPersonIDLoginCompoundUniqueInput>;
export const tblPersonLoginPersonIDLoginCompoundUniqueInputObjectZodSchema = makeSchema();
