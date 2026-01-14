import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassScalarWhereInputObjectSchema as dictTitSubClassScalarWhereInputObjectSchema } from './dictTitSubClassScalarWhereInput.schema';
import { dictTitSubClassUpdateManyMutationInputObjectSchema as dictTitSubClassUpdateManyMutationInputObjectSchema } from './dictTitSubClassUpdateManyMutationInput.schema';
import { dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => dictTitSubClassUpdateManyMutationInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInput>;
export const dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
