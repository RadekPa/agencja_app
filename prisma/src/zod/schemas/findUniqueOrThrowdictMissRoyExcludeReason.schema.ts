import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';

export const dictMissRoyExcludeReasonFindUniqueOrThrowSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonFindUniqueOrThrowArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonFindUniqueOrThrowArgs>;

export const dictMissRoyExcludeReasonFindUniqueOrThrowZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict();