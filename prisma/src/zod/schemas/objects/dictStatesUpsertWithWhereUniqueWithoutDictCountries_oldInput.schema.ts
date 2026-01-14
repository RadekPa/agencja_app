import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesUpdateWithoutDictCountries_oldInputObjectSchema as dictStatesUpdateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUpdateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedUpdateWithoutDictCountries_oldInput.schema';
import { dictStatesCreateWithoutDictCountries_oldInputObjectSchema as dictStatesCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => dictStatesUpdateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema)]),
  create: z.union([z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInput>;
export const dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
