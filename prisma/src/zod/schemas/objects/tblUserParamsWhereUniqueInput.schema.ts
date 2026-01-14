import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsLoginNameCompoundUniqueInputObjectSchema as tblUserParamsLoginNameCompoundUniqueInputObjectSchema } from './tblUserParamsLoginNameCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  Login_Name: z.lazy(() => tblUserParamsLoginNameCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblUserParamsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblUserParamsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsWhereUniqueInput>;
export const tblUserParamsWhereUniqueInputObjectZodSchema = makeSchema();
