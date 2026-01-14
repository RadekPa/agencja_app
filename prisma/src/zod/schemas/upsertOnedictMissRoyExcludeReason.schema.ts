import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './objects/dictMissRoyExcludeReasonSelect.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';
import { dictMissRoyExcludeReasonCreateInputObjectSchema as dictMissRoyExcludeReasonCreateInputObjectSchema } from './objects/dictMissRoyExcludeReasonCreateInput.schema';
import { dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema as dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUncheckedCreateInput.schema';
import { dictMissRoyExcludeReasonUpdateInputObjectSchema as dictMissRoyExcludeReasonUpdateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUpdateInput.schema';
import { dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema as dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema } from './objects/dictMissRoyExcludeReasonUncheckedUpdateInput.schema';

export const dictMissRoyExcludeReasonUpsertOneSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonUpsertArgs> = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema, create: z.union([ dictMissRoyExcludeReasonCreateInputObjectSchema, dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema ]), update: z.union([ dictMissRoyExcludeReasonUpdateInputObjectSchema, dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonUpsertArgs>;

export const dictMissRoyExcludeReasonUpsertOneZodSchema = z.object({ select: dictMissRoyExcludeReasonSelectObjectSchema.optional(),  where: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema, create: z.union([ dictMissRoyExcludeReasonCreateInputObjectSchema, dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema ]), update: z.union([ dictMissRoyExcludeReasonUpdateInputObjectSchema, dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema ]) }).strict();