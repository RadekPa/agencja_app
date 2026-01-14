import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldSelectObjectSchema as dictCountries_oldSelectObjectSchema } from './objects/dictCountries_oldSelect.schema';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './objects/dictCountries_oldInclude.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './objects/dictCountries_oldWhereUniqueInput.schema';

export const dictCountries_oldDeleteOneSchema: z.ZodType<Prisma.dictCountries_oldDeleteArgs> = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), where: dictCountries_oldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldDeleteArgs>;

export const dictCountries_oldDeleteOneZodSchema = z.object({ select: dictCountries_oldSelectObjectSchema.optional(), include: dictCountries_oldIncludeObjectSchema.optional(), where: dictCountries_oldWhereUniqueInputObjectSchema }).strict();