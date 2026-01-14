import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesScalarWhereInputObjectSchema as dictStatesScalarWhereInputObjectSchema } from './dictStatesScalarWhereInput.schema';
import { dictStatesUpdateManyMutationInputObjectSchema as dictStatesUpdateManyMutationInputObjectSchema } from './dictStatesUpdateManyMutationInput.schema';
import { dictStatesUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedUpdateManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => dictStatesUpdateManyMutationInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateManyWithWhereWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateManyWithWhereWithoutDictCountries_oldInput>;
export const dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
