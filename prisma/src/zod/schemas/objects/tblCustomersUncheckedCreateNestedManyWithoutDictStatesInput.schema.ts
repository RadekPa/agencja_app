import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutDictStatesInputObjectSchema as tblCustomersCreateWithoutDictStatesInputObjectSchema } from './tblCustomersCreateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictStatesInput.schema';
import { tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema as tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutDictStatesInput.schema';
import { tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema as tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema } from './tblCustomersCreateManyDictStatesInputEnvelope.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema).array(), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.tblCustomersUncheckedCreateNestedManyWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUncheckedCreateNestedManyWithoutDictStatesInput>;
export const tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectZodSchema = makeSchema();
