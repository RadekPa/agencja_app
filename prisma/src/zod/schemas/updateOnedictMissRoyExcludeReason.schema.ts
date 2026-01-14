import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonUpdateInputObjectSchema as dictMissRoyExcludeReasonUpdateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUpdateInput.schema';
import { dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema as dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUncheckedUpdateInput.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';

export const dictMissRoyExcludeReasonUpdateOneSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonUpdateArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictMissRoyExcludeReasonUpdateInputObjectSchema, dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema]), where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonUpdateArgs>;

export const dictMissRoyExcludeReasonUpdateOneZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  data: z.union([dictMissRoyExcludeReasonUpdateInputObjectSchema, dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema]), where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema }).strict();