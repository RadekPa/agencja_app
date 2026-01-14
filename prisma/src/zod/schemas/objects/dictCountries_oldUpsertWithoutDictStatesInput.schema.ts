import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUpdateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutDictStatesInput.schema';
import { dictCountries_oldCreateWithoutDictStatesInputObjectSchema as dictCountries_oldCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutDictStatesInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCountries_oldUpdateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema)]),
  where: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUpsertWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpsertWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpsertWithoutDictStatesInput>;
export const dictCountries_oldUpsertWithoutDictStatesInputObjectZodSchema = makeSchema();
