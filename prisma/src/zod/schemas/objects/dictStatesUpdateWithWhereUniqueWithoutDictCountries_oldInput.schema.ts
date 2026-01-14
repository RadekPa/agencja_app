import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesUpdateWithoutDictCountries_oldInputObjectSchema as dictStatesUpdateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUpdateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedUpdateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => dictStatesUpdateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInput>;
export const dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
