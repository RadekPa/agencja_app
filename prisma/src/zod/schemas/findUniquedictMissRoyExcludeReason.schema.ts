import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';

export const dictMissRoyExcludeReasonFindUniqueSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonFindUniqueArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonFindUniqueArgs>;

export const dictMissRoyExcludeReasonFindUniqueZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict();