import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateWithoutDictStatesInputObjectSchema as dictCountries_oldCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutDictStatesInput.schema';
import { dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema as dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateOrConnectWithoutDictStatesInput.schema';
import { dictCountries_oldUpsertWithoutDictStatesInputObjectSchema as dictCountries_oldUpsertWithoutDictStatesInputObjectSchema } from './dictCountries_oldUpsertWithoutDictStatesInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema';
import { dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInputObjectSchema as dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInputObjectSchema } from './dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInput.schema';
import { dictCountries_oldUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUpdateWithoutDictStatesInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCountries_oldCreateOrConnectWithoutDictStatesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCountries_oldUpsertWithoutDictStatesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCountries_oldUpdateToOneWithWhereWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUpdateWithoutDictStatesInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutDictStatesInputObjectSchema)]).optional()
}).strict();
export const dictCountries_oldUpdateOneWithoutDictStatesNestedInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpdateOneWithoutDictStatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateOneWithoutDictStatesNestedInput>;
export const dictCountries_oldUpdateOneWithoutDictStatesNestedInputObjectZodSchema = makeSchema();
