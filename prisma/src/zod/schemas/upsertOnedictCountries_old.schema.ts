import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldSelectObjectSchema as dictCountries_oldSelectObjectSchema } from './objects/dictCountries_oldSelect.schema';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './objects/dictCountries_oldInclude.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './objects/dictCountries_oldWhereUniqueInput.schema';
import { dictCountries_oldCreateInputObjectSchema as dictCountries_oldCreateInputObjectSchema } from './objects/dictCountries_oldCreateInput.schema';
import { dictCountries_oldUncheckedCreateInputObjectSchema as dictCountries_oldUncheckedCreateInputObjectSchema } from './objects/dictCountries_oldUncheckedCreateInput.schema';
import { dictCountries_oldUpdateInputObjectSchema as dictCountries_oldUpdateInputObjectSchema } from './objects/dictCountries_oldUpdateInput.schema';
import { dictCountries_oldUncheckedUpdateInputObjectSchema as dictCountries_oldUncheckedUpdateInputObjectSchema } from './objects/dictCountries_oldUncheckedUpdateInput.schema';

export const dictCountries_oldUpsertOneSchema: z.ZodType<Prisma.dictCountries_oldUpsertArgs> = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), where: dictCountries_oldWhereUniqueInputObjectSchema, create: z.union([ dictCountries_oldCreateInputObjectSchema, dictCountries_oldUncheckedCreateInputObjectSchema ]), update: z.union([ dictCountries_oldUpdateInputObjectSchema, dictCountries_oldUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldUpsertArgs>;

export const dictCountries_oldUpsertOneZodSchema = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), where: dictCountries_oldWhereUniqueInputObjectSchema, create: z.union([ dictCountries_oldCreateInputObjectSchema, dictCountries_oldUncheckedCreateInputObjectSchema ]), update: z.union([ dictCountries_oldUpdateInputObjectSchema, dictCountries_oldUncheckedUpdateInputObjectSchema ]) }).strict();