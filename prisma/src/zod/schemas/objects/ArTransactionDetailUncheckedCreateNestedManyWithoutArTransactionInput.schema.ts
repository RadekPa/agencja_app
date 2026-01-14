import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateOrConnectWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema as ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema } from './ArTransactionDetailCreateManyArTransactionInputEnvelope.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './ArTransactionDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInput>;
export const ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectZodSchema = makeSchema();
