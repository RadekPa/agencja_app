import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonUpdateManyMutationInputObjectSchema as dictMissRoyExcludeReasonUpdateManyMutationInputObjectSchema } from './objects/dictMissRoyExcludeReasonUpdateManyMutationInput.schema';
import { dictMissRoyExcludeReasonWhereInputObjectSchema as dictMissRoyExcludeReasonWhereInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereInput.schema';

export const dictMissRoyExcludeReasonUpdateManySchema: z.ZodType<Prisma.dictMissRoyExcludeReasonUpdateManyArgs> = z.object({ data: dictMissRoyExcludeReasonUpdateManyMutationInputObjectSchema, where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonUpdateManyArgs>;

export const dictMissRoyExcludeReasonUpdateManyZodSchema = z.object({ data: dictMissRoyExcludeReasonUpdateManyMutationInputObjectSchema, where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional() }).strict();