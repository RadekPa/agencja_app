import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesSelectObjectSchema as dictArticlesSelectObjectSchema } from './objects/dictArticlesSelect.schema';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './objects/dictArticlesInclude.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './objects/dictArticlesWhereUniqueInput.schema';
import { dictArticlesCreateInputObjectSchema as dictArticlesCreateInputObjectSchema } from './objects/dictArticlesCreateInput.schema';
import { dictArticlesUncheckedCreateInputObjectSchema as dictArticlesUncheckedCreateInputObjectSchema } from './objects/dictArticlesUncheckedCreateInput.schema';
import { dictArticlesUpdateInputObjectSchema as dictArticlesUpdateInputObjectSchema } from './objects/dictArticlesUpdateInput.schema';
import { dictArticlesUncheckedUpdateInputObjectSchema as dictArticlesUncheckedUpdateInputObjectSchema } from './objects/dictArticlesUncheckedUpdateInput.schema';

export const dictArticlesUpsertOneSchema: z.ZodType<Prisma.dictArticlesUpsertArgs> = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), where: dictArticlesWhereUniqueInputObjectSchema, create: z.union([ dictArticlesCreateInputObjectSchema, dictArticlesUncheckedCreateInputObjectSchema ]), update: z.union([ dictArticlesUpdateInputObjectSchema, dictArticlesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictArticlesUpsertArgs>;

export const dictArticlesUpsertOneZodSchema = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), where: dictArticlesWhereUniqueInputObjectSchema, create: z.union([ dictArticlesCreateInputObjectSchema, dictArticlesUncheckedCreateInputObjectSchema ]), update: z.union([ dictArticlesUpdateInputObjectSchema, dictArticlesUncheckedUpdateInputObjectSchema ]) }).strict();