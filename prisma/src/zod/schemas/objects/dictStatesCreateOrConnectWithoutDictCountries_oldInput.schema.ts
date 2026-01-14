import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesCreateWithoutDictCountries_oldInputObjectSchema as dictStatesCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesCreateOrConnectWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateOrConnectWithoutDictCountries_oldInput>;
export const dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
