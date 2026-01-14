import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.number().int().optional()
}).strict();
export const tblAuthorsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblAuthorsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsWhereUniqueInput>;
export const tblAuthorsWhereUniqueInputObjectZodSchema = makeSchema();
