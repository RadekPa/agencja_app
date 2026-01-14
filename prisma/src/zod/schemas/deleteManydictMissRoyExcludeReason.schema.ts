import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonWhereInputObjectSchema as dictMissRoyExcludeReasonWhereInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereInput.schema';

export const dictMissRoyExcludeReasonDeleteManySchema: z.ZodType<Prisma.dictMissRoyExcludeReasonDeleteManyArgs> = z.object({ where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonDeleteManyArgs>;

export const dictMissRoyExcludeReasonDeleteManyZodSchema = z.object({ where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional() }).strict();