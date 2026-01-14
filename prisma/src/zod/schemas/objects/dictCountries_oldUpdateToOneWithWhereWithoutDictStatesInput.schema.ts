import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { dictCountries_oldUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUpdateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCountries_oldUpdateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema)])
}).strict();
export const dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInput>;
export const dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInputObjectZodSchema = makeSchema();
