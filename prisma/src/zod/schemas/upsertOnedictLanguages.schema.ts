import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './objects/dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesCreateInputObjectSchema as dictLanguagesCreateInputObjectSchema } from './objects/dictLanguagesCreateInput.schema';
import { dictLanguagesUncheckedCreateInputObjectSchema as dictLanguagesUncheckedCreateInputObjectSchema } from './objects/dictLanguagesUncheckedCreateInput.schema';
import { dictLanguagesUpdateInputObjectSchema as dictLanguagesUpdateInputObjectSchema } from './objects/dictLanguagesUpdateInput.schema';
import { dictLanguagesUncheckedUpdateInputObjectSchema as dictLanguagesUncheckedUpdateInputObjectSchema } from './objects/dictLanguagesUncheckedUpdateInput.schema';

export const dictLanguagesUpsertOneSchema: z.ZodType<Prisma.dictLanguagesUpsertArgs> = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema, create: z.union([ dictLanguagesCreateInputObjectSchema, dictLanguagesUncheckedCreateInputObjectSchema ]), update: z.union([ dictLanguagesUpdateInputObjectSchema, dictLanguagesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictLanguagesUpsertArgs>;

export const dictLanguagesUpsertOneZodSchema = z.object({ select: dictLanguagesSelectObjectSchema.optional(), include: dictLanguagesIncludeObjectSchema.optional(), where: dictLanguagesWhereUniqueInputObjectSchema, create: z.union([ dictLanguagesCreateInputObjectSchema, dictLanguagesUncheckedCreateInputObjectSchema ]), update: z.union([ dictLanguagesUpdateInputObjectSchema, dictLanguagesUncheckedUpdateInputObjectSchema ]) }).strict();