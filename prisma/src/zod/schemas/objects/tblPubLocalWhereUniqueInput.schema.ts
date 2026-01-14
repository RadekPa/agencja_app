import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.number().int().optional()
}).strict();
export const tblPubLocalWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPubLocalWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalWhereUniqueInput>;
export const tblPubLocalWhereUniqueInputObjectZodSchema = makeSchema();
