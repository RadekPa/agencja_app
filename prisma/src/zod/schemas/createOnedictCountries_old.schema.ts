import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldSelectObjectSchema as dictCountries_oldSelectObjectSchema } from './objects/dictCountries_oldSelect.schema';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './objects/dictCountries_oldInclude.schema';
import { dictCountries_oldCreateInputObjectSchema as dictCountries_oldCreateInputObjectSchema } from './objects/dictCountries_oldCreateInput.schema';
import { dictCountries_oldUncheckedCreateInputObjectSchema as dictCountries_oldUncheckedCreateInputObjectSchema } from './objects/dictCountries_oldUncheckedCreateInput.schema';

export const dictCountries_oldCreateOneSchema: z.ZodType<Prisma.dictCountries_oldCreateArgs> = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), data: z.union([dictCountries_oldCreateInputObjectSchema, dictCountries_oldUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldCreateArgs>;

export const dictCountries_oldCreateOneZodSchema = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), data: z.union([dictCountries_oldCreateInputObjectSchema, dictCountries_oldUncheckedCreateInputObjectSchema]) }).strict();