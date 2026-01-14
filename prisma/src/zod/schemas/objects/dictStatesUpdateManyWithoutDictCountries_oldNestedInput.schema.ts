import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateWithoutDictCountries_oldInputObjectSchema as dictStatesCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateWithoutDictCountries_oldInput.schema';
import { dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema as dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateOrConnectWithoutDictCountries_oldInput.schema';
import { dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema as dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema } from './dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInput.schema';
import { dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema as dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema } from './dictStatesCreateManyDictCountries_oldInputEnvelope.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema as dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema } from './dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInput.schema';
import { dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema as dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema } from './dictStatesUpdateManyWithWhereWithoutDictCountries_oldInput.schema';
import { dictStatesScalarWhereInputObjectSchema as dictStatesScalarWhereInputObjectSchema } from './dictStatesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema).array(), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => dictStatesWhereUniqueInputObjectSchema), z.lazy(() => dictStatesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => dictStatesWhereUniqueInputObjectSchema), z.lazy(() => dictStatesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => dictStatesWhereUniqueInputObjectSchema), z.lazy(() => dictStatesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => dictStatesWhereUniqueInputObjectSchema), z.lazy(() => dictStatesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => dictStatesScalarWhereInputObjectSchema), z.lazy(() => dictStatesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const dictStatesUpdateManyWithoutDictCountries_oldNestedInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateManyWithoutDictCountries_oldNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateManyWithoutDictCountries_oldNestedInput>;
export const dictStatesUpdateManyWithoutDictCountries_oldNestedInputObjectZodSchema = makeSchema();
