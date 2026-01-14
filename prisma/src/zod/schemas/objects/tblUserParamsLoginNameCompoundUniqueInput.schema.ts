import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string(),
  Name: z.string()
}).strict();
export const tblUserParamsLoginNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblUserParamsLoginNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsLoginNameCompoundUniqueInput>;
export const tblUserParamsLoginNameCompoundUniqueInputObjectZodSchema = makeSchema();
