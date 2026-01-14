import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPersonLoginPersonIDLoginCompoundUniqueInputObjectSchema as tblPersonLoginPersonIDLoginCompoundUniqueInputObjectSchema } from './tblPersonLoginPersonIDLoginCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  PersonID_Login: z.lazy(() => tblPersonLoginPersonIDLoginCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblPersonLoginWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPersonLoginWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginWhereUniqueInput>;
export const tblPersonLoginWhereUniqueInputObjectZodSchema = makeSchema();
