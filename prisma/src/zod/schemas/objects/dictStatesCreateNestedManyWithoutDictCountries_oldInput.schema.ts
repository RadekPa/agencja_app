import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateWithoutDictCountries_oldInputObjectSchema as dictStatesCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateWithoutDictCountries_oldInput.schema';
import { dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateWithoutDictCountries_oldInput.schema';
import { dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema as dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateOrConnectWithoutDictCountries_oldInput.schema';
import { dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema as dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema } from './dictStatesCreateManyDictCountries_oldInputEnvelope.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesCreateWithoutDictCountries_oldInputObjectSchema).array(), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesCreateOrConnectWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => dictStatesWhereUniqueInputObjectSchema), z.lazy(() => dictStatesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesCreateNestedManyWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateNestedManyWithoutDictCountries_oldInput>;
export const dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
