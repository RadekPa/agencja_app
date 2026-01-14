import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailCreateWithoutArTransactionInputObjectSchema as ArTransferDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateWithoutArTransactionInput.schema';
import { ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema as ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateOrConnectWithoutArTransactionInput.schema';
import { ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema as ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema } from './ArTransferDetailCreateManyArTransactionInputEnvelope.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './ArTransferDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInput>;
export const ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectZodSchema = makeSchema();
