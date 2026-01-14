import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldSelectObjectSchema as dictCountries_oldSelectObjectSchema } from './objects/dictCountries_oldSelect.schema';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './objects/dictCountries_oldInclude.schema';
import { dictCountries_oldUpdateInputObjectSchema as dictCountries_oldUpdateInputObjectSchema } from './objects/dictCountries_oldUpdateInput.schema';
import { dictCountries_oldUncheckedUpdateInputObjectSchema as dictCountries_oldUncheckedUpdateInputObjectSchema } from './objects/dictCountries_oldUncheckedUpdateInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './objects/dictCountries_oldWhereUniqueInput.schema';

export const dictCountries_oldUpdateOneSchema: z.ZodType<Prisma.dictCountries_oldUpdateArgs> = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), data: z.union([dictCountries_oldUpdateInputObjectSchema, dictCountries_oldUncheckedUpdateInputObjectSchema]), where: dictCountries_oldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateArgs>;

export const dictCountries_oldUpdateOneZodSchema = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), data: z.union([dictCountries_oldUpdateInputObjectSchema, dictCountries_oldUncheckedUpdateInputObjectSchema]), where: dictCountries_oldWhereUniqueInputObjectSchema }).strict();