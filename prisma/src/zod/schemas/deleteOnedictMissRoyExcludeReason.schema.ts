import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';

export const dictMissRoyExcludeReasonDeleteOneSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonDeleteArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonDeleteArgs>;

export const dictMissRoyExcludeReasonDeleteOneZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict();