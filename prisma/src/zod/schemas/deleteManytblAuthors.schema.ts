import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './objects/tblAuthorsWhereInput.schema';

export const tblAuthorsDeleteManySchema: z.ZodType<Prisma.tblAuthorsDeleteManyArgs> = z.object({ where: tblAuthorsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAuthorsDeleteManyArgs>;

export const tblAuthorsDeleteManyZodSchema = z.object({ where: tblAuthorsWhereInputObjectSchema.optional() }).strict();